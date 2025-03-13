# Stage 1: Download and compile dependencies
FROM ubuntu:24.04 AS builder

# Install required packages
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    build-essential \
    gcc \
    g++ \
    make \
    && apt-get clean

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="/root/.deno/bin:${PATH}"

WORKDIR /build

# Create necessary directories
RUN mkdir -p /build/dist-simple

# Copy the download script and any necessary files
COPY scripts/ /build/scripts/
COPY deno.json /build/
COPY deno.lock /build/

# Download libsimple dependency
RUN deno run --allow-net --allow-read --allow-write --allow-run --allow-env scripts/download-simple.ts

# Compile libsimple from source if needed
# Uncomment and adjust the following lines if you need to compile from source
# COPY src/simple /build/src/simple
# WORKDIR /build/src/simple
# RUN ./configure && make && cp libsimple.so /build/dist-simple/

# Verify the downloaded files exist and show their contents
RUN ls -la /build/dist-simple || echo "Warning: dist-simple directory is empty or does not exist"

# Stage 2: Final image - using the same base image as builder to ensure GLIBC compatibility
FROM ubuntu:24.04

# Install Deno
RUN apt-get update && apt-get install -y curl unzip && apt-get clean
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="/root/.deno/bin:${PATH}"

WORKDIR /app

# Create necessary directories
RUN mkdir -p /app/data
RUN mkdir -p /app/dist-simple

# Copy application files
COPY . /app/

# Copy the downloaded dependencies from the builder stage
COPY --from=builder /build/dist-simple/ /app/dist-simple/

# Set permissions
RUN chmod -R 755 /app/data
RUN chmod -R 755 /app/dist-simple

# Verify the copied files exist
RUN ls -la /app/dist-simple || echo "Warning: dist-simple directory is empty or does not exist"

# Print GLIBC version for debugging
RUN ldd --version

# Cache dependencies
RUN deno cache main.ts

ARG PORT
EXPOSE ${PORT:-8080}

# Run the application with necessary permissions
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--allow-ffi", "--unstable-broadcast-channel", "main.ts"]
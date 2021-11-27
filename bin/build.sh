#!/usr/bin/env bash

# Exit if any command fails.
set -e

# Change to the expected directory.
cd "$(dirname "$0")"
cd ..
DIR=$(pwd)
BUILD_DIR="$DIR/build/boostimer"

# Enable nicer messaging for build status.
BLUE_BOLD='\033[1;34m'
GREEN_BOLD='\033[1;32m'
RED_BOLD='\033[1;31m'
YELLOW_BOLD='\033[1;33m'
COLOR_RESET='\033[0m'

error() {
    echo -e "\n${RED_BOLD}$1${COLOR_RESET}\n"
}
status() {
    echo -e "\n${BLUE_BOLD}$1${COLOR_RESET}\n"
}
success() {
    echo -e "\n${GREEN_BOLD}$1${COLOR_RESET}\n"
}
warning() {
    echo -e "\n${YELLOW_BOLD}$1${COLOR_RESET}\n"
}

status "Building Boostimer zip... 📁"

# remove the build directory if exists and create one
rm -rf "$DIR/build"
mkdir -p "$BUILD_DIR"

# Run the build.
status "Installing yarn dependencies... 📦"
# yarn install

status "Generating build... 🔨"
yarn build
yarn makepot
yarn pot2json

# Copy all files
status "Copying files... ✌️"
FILES=(boostimer.php readme.txt dist includes assets templates languages composer.json composer.lock LICENSE)

for file in ${FILES[@]}; do
    cp -R $file $BUILD_DIR
done

success "All required files are copied! 😎"

# Install composer dependencies
status "Installing dependencies... 📦"
cd $BUILD_DIR
composer install --optimize-autoloader --no-dev -q

success "Installing composer dependencies are completed! 💪"

# Remove files and folders that are not needed.
rm composer.json composer.lock
rm -rf assets/src assets/scss

# go one up, to the build dir
status "Creating archive... 🎁"
cd ..
zip -r -q boostimer.zip boostimer

# remove the source directory
rm -rf boostimer

success "Done. You've built Boostimer! 🔥 "

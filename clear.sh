# Clearing unnecessary files
# This script is used to clear unnecessary files from the project directory.

echo "Clearing log files:"
ls logs/*.log
rm logs/*.log

echo "Clearing temporary file:"
ls ./pipelines/pyTEST/app/message_log.txt
rm ./pipelines/pyTEST/app/message_log.txt

# Ask to remove (Y/N) filesystem from backend
while true; do
    echo "Do you want to remove the filesystem from backend? (Y/N)"
    read -r answer
    if [[ $answer == "Y" || $answer == "y" ]]; then
        echo "Clearing filesystem:"
        rm -rf ./backend/filesystem*
        break
    elif [[ $answer == "N" || $answer == "n" ]]; then
        echo "Filesystem not cleared"
        break
    else
        echo "Invalid input. Please enter Y or N."
    fi
done

#include <iostream>

using namespace std;

void comparisonExample() {
    int first = 7;
    int second = 4;

    cout << "Comparison operators: " << first << " > " << second << " is "
         << (first > second) << ", and " << first << " == " << second << " is "
         << (first == second) << "\n";
}

void signExample() {
    int number;
    cout << "Enter an integer to check its sign: ";
    cin >> number;

    if (number > 0) {
        cout << "The number is positive.\n";
    } else if (number < 0) {
        cout << "The number is negative.\n";
    } else {
        cout << "The number is zero.\n";
    }
}

void switchExample() {
    int choice;
    cout << "Choose a day (1-3): ";
    cin >> choice;

    switch (choice) {
        case 1:
            cout << "Monday\n";
            break;
        case 2:
            cout << "Tuesday\n";
            break;
        case 3:
            cout << "Wednesday\n";
            break;
        default:
            cout << "Unknown choice\n";
    }
}

void whileExample() {
    int count = 5;
    cout << "While countdown: ";
    while (count > 0) {
        cout << count << ' ';
        --count;
    }
    cout << "done\n";
}

void doWhileExample() {
    int number;
    do {
        cout << "Enter a positive number: ";
        cin >> number;
    } while (number <= 0);

    cout << "Accepted: " << number << "\n";
}

void breakContinueExample() {
    cout << "Numbers from 1 to 5, skipping 3: ";
    for (int number = 1; number <= 5; ++number) {
        if (number == 3) {
            continue;
        }
        if (number > 4) {
            break;
        }
        cout << number << ' ';
    }
    cout << "\n";
}

void gotoExample() {
    int value;
retry:
    cout << "Enter a number from 1 to 10 (goto example): ";
    cin >> value;
    if (value < 1 || value > 10) {
        cout << "The value is outside the range. Try again.\n";
        goto retry;
    }
    cout << "Accepted: " << value << "\n";
}

int main() {
    cout << "Laboratory Work 2 - Control Structures\n\n";

    comparisonExample();
    signExample();
    switchExample();
    whileExample();
    breakContinueExample();
    doWhileExample();
    gotoExample();

    cout << "\nAll examples finished.\n";
    return 0;
}

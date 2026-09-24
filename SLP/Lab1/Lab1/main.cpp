// Name: Kazbek
// Date: 2026-09-12
// Description: Lab 1 introductory C++ program

#include <iostream>

using namespace std;

int main()
{
    const double PI = 3.14159;

    int firstNumber = 0;
    int secondNumber = 0;
    double radius = 0.0;
    char grade = 'A';
    bool passed = true;

    cout << "Lab 1 Introductory C++ Program\n\n";

    cout << "Enter first integer: ";
    cin >> firstNumber;

    cout << "Enter second integer: ";
    cin >> secondNumber;

    cout << "Enter circle radius: ";
    cin >> radius;

    cout << "Enter one character grade: ";
    cin >> grade;

    int sum = firstNumber + secondNumber;
    int difference = firstNumber - secondNumber;
    int product = firstNumber * secondNumber;
    int quotient = firstNumber / secondNumber;
    int remainder = firstNumber % secondNumber;
    double circumference = 2 * PI * radius;

    cout << "\nResults\n";
    cout << "First number: " << firstNumber << "\n";
    cout << "Second number: " << secondNumber << "\n";
    cout << "Sum (+): " << sum << "\n";
    cout << "Difference (-): " << difference << "\n";
    cout << "Product (*): " << product << "\n";
    cout << "Quotient (/): " << quotient << "\n";
    cout << "Remainder (%): " << remainder << "\n";
    cout << "Circle circumference using const PI: " << circumference << "\n";
    cout << "Grade character: " << grade << "\n";
    cout << "Passed boolean value: " << passed << "\n";

    return 0;
}

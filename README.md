# Catalog_Assessment
Catalog IT Solutions Assessment

## Problem Statement


Shamir's Secret Sharing - Constant Term Calculator

This project implements a simplified version of Shamir's Secret Sharing algorithm to find the constant term \( c \) of a polynomial using Lagrange interpolation. The input is provided in JSON format, containing points in different bases.

-->Features
- Reads polynomial roots from a separate JSON file.
- Decodes the roots from various bases (e.g., binary, decimal, hexadecimal).
- Calculates the secret constant \( c \) using Lagrange interpolation.
- Processes multiple test cases and outputs results clearly.

-->Installation
Clone the repository:
https://github.com/Azam-30/Catalog_Assessment


## Usage

Create JSON files (input_case1.json, input_case2.json) in the project directory with the required format.

Run the script to find the constant terms:

node index.js


## Input JSON Format

The input JSON should follow this structure:

*input.json*
json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}


-->Example

For the given input files, the script will output:




```
Processing test case: input_case1.json
The secret constant (c) is: 3
Processing test case: input_case2.json
The secret constant (c) is: 79836264046592

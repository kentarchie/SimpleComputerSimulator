# SimpleComputerSimulator
Implementation of a simple processor to demonstrate basic computer principles
#The hypothetical machine
The book uses an imaginary computer for discussion purposes.
Its much simpler than real computers and has just the right properties to show off
all the things the book wants to cover.
The details of it are in Appendix C.

There are 16 General Purpose registers numbered 0 through F in hexadecimal (base 16).
Each GP register is 1 byte wide.
Main memory has 256 cells, each one byte, numbered from 00 to FF.
There are two special purpose registers.
One is the Program Counter (PS) and it is one byte.
The other is the Instruction Register (IR) and it is 2 bytes wide.

Each instruction in the machine is 16 bits wide, consisting of 4 hex digits.
The opcode is in the first 4 bits.
This means there are at most 16 instructions.
Our machine only uses 12, numbered 1 to C.

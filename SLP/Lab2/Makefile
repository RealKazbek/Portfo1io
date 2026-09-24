CXX := clang++
CXXFLAGS := -std=c++17 -Wall -Wextra -pedantic
TARGET := control_structures
SOURCE := src/control_structures.cpp

all: $(TARGET)

$(TARGET): $(SOURCE)
	$(CXX) $(CXXFLAGS) $(SOURCE) -o $(TARGET)

run: $(TARGET)
	./$(TARGET)

clean:
	rm -f $(TARGET)

.PHONY: all run clean

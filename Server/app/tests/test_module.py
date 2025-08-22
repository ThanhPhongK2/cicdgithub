# app/tests/test_module.py
import pytest
from app.module import add, is_even


def test_add_numbers():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0


def test_is_even():
    assert is_even(2) is True
    assert is_even(3) is False

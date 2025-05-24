<?php
namespace Hiimalexjgarcia\Dcp1856;
use InvalidArgumentException;

final class Collatz
{
    private $number;

    public function __construct(int $number)
    {
        if ($number <= 0) {
            throw new InvalidArgumentException("Number must be a positive integer.");
        }
        $this->number = $number;
    }

    public function sequenceLength(): int
    {
        $count = 1;
        $n = $this->number;
        while ($n !== 1) {
            if ($n % 2 === 0) {
                $n /= 2;
            } else {
                $n = 3 * $n + 1;
            }
            $count++;
        }
        return $count;
    }
}
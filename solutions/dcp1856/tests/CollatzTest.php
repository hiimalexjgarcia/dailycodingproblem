<?php
use Hiimalexjgarcia\Dcp1856\Collatz;

final class CollatzTest extends \PHPUnit\Framework\TestCase
{
    public function testCollatz()
    {
        $collatz = new Collatz(1);
        $this->assertEquals(1, $collatz->sequenceLength());

        $collatz = new Collatz(2);
        $this->assertEquals(2, $collatz->sequenceLength());
 
        $collatz = new Collatz(3);
        $this->assertEquals(8, $collatz->sequenceLength());
 
        $collatz = new Collatz(4);
        $this->assertEquals(3, $collatz->sequenceLength());

        $collatz = new Collatz(4420);
        $this->assertEquals(96, $collatz->sequenceLength());

        $collatz = new Collatz(1000000);
        $this->assertEquals(153, $collatz->sequenceLength());

    }

}
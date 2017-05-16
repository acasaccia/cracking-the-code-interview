package main

import (
	"log"
	"strconv"
	"github.com/fatih/color"
)

var N = 20

func main() {

	fizzJobs := make(chan int)
	buzzJobs := make(chan int)
	fizzBuzzJobs := make(chan int)
	numberJobs := make(chan int)
	messages := make(chan int)
	done := make(chan bool)

	log.Println("Created channels")

	go orchestrator(fizzJobs, buzzJobs, fizzBuzzJobs, numberJobs, messages, done)
	go fizzWorker(fizzJobs, messages)
	go buzzWorker(buzzJobs, messages)
	go fizzBuzzWorker(fizzBuzzJobs, messages)
	go numberWorker(numberJobs, messages)

	messages <- 1
	<-done

	log.Println("Signal received from orchestrator, all done")

}

func orchestrator(fizzJobs chan int, buzzJobs chan int, fizzBuzzJobs chan int, numberJobs chan int, messages chan int, done chan bool) {
	for {
		n := <-messages
		if n > N {
			log.Println("All done, sending signal to main thread")
			done <- true
		} else {
			//log.Println("Pushing job", n, "to workers")
			fizzJobs <- n
			buzzJobs <- n
			fizzBuzzJobs <- n
			numberJobs <- n
		}
	}
}

func fizzWorker(jobs chan int, messages chan int) {
	for {
		n := <-jobs
		//log.Println("fizzWorker got job", n)
		if (n%3 == 0 && n%5 != 0) {
			color.Red("Fizz")
			messages <- n+1
		}
	}
}

func buzzWorker(jobs chan int, messages chan int) {
	for {
		n := <-jobs
		//log.Println("buzzWorker got job", n)
		if (n%3 != 0 && n%5 == 0) {
			color.Red("Buzz")
			messages <- n+1
		}
	}
}

func fizzBuzzWorker(jobs chan int, messages chan int) {
	for {
		n := <-jobs
		//log.Println("fizzBuzzWorker got job", n)
		if (n%3 == 0 && n%5 == 0) {
			color.Red("FizzBuzz")
			messages <- n+1
		}
	}
}

func numberWorker(jobs chan int, messages chan int) {
	for {
		n := <-jobs
		//log.Println("numberWorker got job", n)
		if (n%3 != 0 && n%5 != 0) {
			color.Red(strconv.Itoa(n))
			messages <- n+1
		}
	}
}
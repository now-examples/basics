package main

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, fmt.Sprintf("The date is %s", time.Now().Format(time.RFC3339)))
}

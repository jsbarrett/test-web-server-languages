package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  // r := gin.Default()
  r := gin.New()
  r.GET("/", func(c *gin.Context) {
    c.String(http.StatusOK, "hi\n")
  })
  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

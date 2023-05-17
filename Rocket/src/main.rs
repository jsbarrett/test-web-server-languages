#[macro_use] extern crate rocket;

#[cfg(test)] mod tests;

// Try visiting:
//   http://127.0.0.1:8000/hello/world
#[get("/")]
fn world() -> &'static str {
    "hi\n"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![world])
}

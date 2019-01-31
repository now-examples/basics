use http::StatusCode;
use now_lambda::{lambda, IntoResponse, Request, Response, error::NowError};
use std::error::Error;

fn handler(request: Request) -> Result<impl IntoResponse, NowError> {
    let uri = request.uri();
    let response = Response::builder()
        .status(StatusCode::OK)
        .body(format!("You made a request to the Rust Lambda on: {}", uri))
        .expect("failed to render response");

    Ok(response)
}

fn main() -> Result<(), Box<dyn Error>> {
    Ok(lambda!(handler))
}

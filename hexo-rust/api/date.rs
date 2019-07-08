use http::{Request, Response, StatusCode};
use chrono::*;

fn handler(request: Request<()>) -> http::Result<Response<String>> {
    let date: DateTime<Local> = Local::now();
    let response = Response::builder()
        .status(StatusCode::OK)
        .body(format!("{}", date))
        .expect("failed to render response");

    Ok(response)
}
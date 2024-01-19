/**
 * An example edge function which forwards the request to the origin.
 * See routes.js for how this function is configured to run for requests to "/".
 */
export async function handleHttpRequest(request) {
    let url = request.url;
    for (let i = 0; i < 1000; i++) {
        url += request.url;
    }
    return new Response(url.length, {
        status: 200,
        headers: {
            'content-type': 'text/plain',
        },
    })
}

/**
 * 1. Purpose
    GET: Designed to retrieve data from the server without causing any side effects.
    It's used for actions that are idempotent, meaning they can be repeated without changing the state of the server.
     For example, fetching a web page, getting user data, etc.
    POST: Used to send data to the server, often resulting in a change in server state. 
    It's used for actions that involve creating, updating, or modifying resources on the server, like submitting a form,
    creating a new user, etc.
2. Data Handling
    GET: Data is appended to the URL in the query string (e.g., example.com/login?user=username&pass=password).
    This means the data is visible in the URL, can be cached, stored in browser history, and bookmarked.
    POST: Data is sent in the body of the request, not the URL.
    This makes it more suitable for sending large amounts of data and sensitive information, as it’s not exposed in the URL.
3. URL Length Limitation
    GET: URLs have a length limit (depending on the browser, often around 2048 characters). 
    If you send too much data, the request might not work.
    POST: No URL length limitation since the data is sent in the body, allowing you to send larger amounts of data.
4. Caching
    GET: Requests can be cached by browsers and proxies because GET is considered a safe method. 
    If the same URL is requested multiple times, the cached response might be returned.
    POST: Generally, POST requests are not cached because they can cause changes on the server, 
    and you wouldn’t want to submit the same data multiple times unintentionally.
5. Idempotency
    GET: Idempotent, meaning that making the same GET request multiple times will not change the state of the server.
    POST: Not idempotent by nature. 
    Sending the same POST request multiple times can cause different results (e.g., multiple records being created).
6. Use Cases
    GET: Fetching data, searching, navigation, loading web pages, etc.
    POST: Submitting forms, uploading files, sending complex data, making changes to server resources, etc.
Summary:
    GET: Fetch data without side effects, data sent via URL, can be cached.
    POST: Send data to the server that might alter its state, data sent in the body, not cached, no URL length limitation.
 */
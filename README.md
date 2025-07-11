## API Overview
API returns a collection for movies, tv-shows,  actors. It includes movie trailer urk, awards, full biography, and many other useful informations. The API provides complete and updated data for over 9 million titles (movies, series and episodes ) and 11 million actors/crew and cast members.

## API Documentation

## General Response Format
- All endpoints return an object with a `'results'` key.
- Endpoints with pagination include additional keys: `'page'`, `'next'`, `'entries'`.

**Note:** All query parameters are optional.

---

## Titles

### Get Multiple Titles
**Path:** `/titles`  
**Description:** Returns array of titles according to filters/sorting parameters  
**Query Parameters:**
- Multiple optional parameters
- Unique `'list'` parameter to specify collection (options available in Utils - Titles Lists)  
**Model:** `title`

### Get Titles by List of IDs
**Path:** `/x/titles-by-ids`  
**Description:** Returns array of titles for specified IDs  
**Query Parameters:**
- `info`
- `list` (collection to query - options in Utils - Titles Lists)
- `idsList` (array of strings, required)  
**Model:** `title`

### Get Single Title
**Path:** `/titles/{id}`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns title with specified filters/sorting  
**Query Parameters:** `info`  
**Model:** `title`

### Get Title Rating
**Path:** `/titles/{id}/ratings`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns title rating and votes count  
**Model:** `rating`

---

## Series & Episodes

### Get Series Episodes
**Path:** `/titles/series/{id}`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns array of episodes (ID, episode number, season number) in ascending order  
**Model:** `light episode`

### Get Season Count
**Path:** `/titles/seasons/{id}`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns number of seasons (integer)

### Get Season Episodes
**Path:** `/titles/series/{id}/{season}`  
**Path Parameters:**
- `id` (IMDb ID, required)
- `season` (season number, required)  
**Description:** Returns episodes for specified season  
**Model:** `light episode`

### Get Episode Details
**Path:** `/titles/episode/{id}`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns episode with specified filters  
**Query Parameters:** `info`  
**Model:** `title`

---

## Search

### Search by Keyword
**Path:** `/titles/search/keyword/{keyword}`  
**Path Parameter:** `keyword` (required)  
**Description:** Returns titles matching keyword with filters  
**Query Parameters:** Multiple optional  
**Model:** `title`

### Search by Title
**Path:** `/titles/search/title/{title}`  
**Path Parameter:** `title` (or partial title, required)  
**Description:** Returns matching titles  
**Query Parameters:**
- Multiple optional
- Unique `exact` parameter (default: false)  
**Model:** `title`

### Search by AKAs
**Path:** `/titles/search/akas/{aka}`  
**Path Parameter:** `aka` (exact match, case-sensitive, required)  
**Description:** Returns titles with exact AKA match  
**Query Parameters:** Multiple optional  
**Model:** `title`

---

## Actors

### Get Multiple Actors
**Path:** `/actors`  
**Description:** Returns array of actors with filters  
**Query Parameters:** `limit`, `page`  
**Model:** `actor`

### Get Actor by ID
**Path:** `/actors/{id}`  
**Path Parameter:** `id` (IMDb ID, required)  
**Description:** Returns actor details  
**Model:** `actor`

---

## Utils

### Get Title Types
**Path:** `/title/utils/titleType`  
**Description:** Returns array of title types

### Get Genres
**Path:** `/title/utils/genres`  
**Description:** Returns array of genre


---

## Version
v1.0

## General Response Format
- All endpoints return an object with a `'results'` key.
- Endpoints with pagination include additional keys: `'page'`, `'next'`, `'entries'`. 

---

## Available Endpoints  

### Titles  
- **`/titles`** - Get multiple titles with filtering/sorting options  
- **`/x/titles-by-ids`** - Get specific titles by their IDs  
- **`/titles/{id}`** - Get details for a single title  
- **`/titles/{id}/ratings`** - Get rating information for a title  
- **`/titles/x/upcoming`** - Get upcoming titles  

### Series & Episodes  
- **`/titles/series/{id}`** - Get all episodes for a series  
- **`/titles/seasons/{id}`** - Get season count for a series  
- **`/titles/series/{id}/{season}`** - Get episodes for specific season  
- **`/titles/episode/{id}`** - Get details for a specific episode  

### Search  
- **`/titles/search/keyword/{keyword}`** - Search titles by keyword  
- **`/titles/search/title/{title}`** - Search by title/partial title  
- **`/titles/search/akas/{aka}`** - Search by exact AKA match  

### Actors  
- **`/actors`** - Get multiple actors with pagination  
- **`/actors/{id}`** - Get details for a specific actor  

### Utilities  
- **`/title/utils/titleType`** - Get available title types  
- **`/title/utils/genres`** - Get available genres  
- **`/title/utils/lists`** - Get available title lists  


---

## Authentication
http
GET /titles HTTP/1.1
Authorization: Bearer your_api_key_here
Host: www.rapidapi.com


----

## Error Handling

### Common HTTP Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 400 | Bad Request | Client sent an invalid request (missing parameters or malformed data) |
| 401 | Unauthorized | Client failed to authenticate |
| 403 | Forbidden | Client authenticated but lacks permissions |
| 404 | Not Found | Requested resource doesn't exist |
| 412 | Precondition Failed | Request header conditions failed |
| 500 | Internal Server Error | Generic server-side error |
| 503 | Service Unavailable | Service temporarily unavailable |

## Error Response Best Practices

### Basic Error Response
```json
{
  "error": "auth-0001",
  "message": "Incorrect username and password",
  "detail": "Ensure credentials are correct"
}

-----
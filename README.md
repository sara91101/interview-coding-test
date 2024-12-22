# Kmbal Coding Test

## Instructions

### Pre-requisites

1. Fork this repo to your own GitHub account.
2. Clone the repo to your local machine.
3. Ensure you have Docker installed.

### Rules

Candidates are welcome to use any tools to complete the coding test, including
documentation, search engines, and AI assistants like ChatGPT or Claude. However,
they must be prepared to answer questions about their work, and justify technical
decisions they have made.

### Background

The repo contains a movie dashboard. Users can register at the `/register` route.
Once registered, a user can see a list of movies in the dashboard. They can click
on a movie to view it's description.

### Instructions

Users should be able to add reviews for a movie. When adding a review, the user
should have to option to provide a rating between 1 and 5. Each user should only
be able to provide a single review for the movie. The movies list should display
the average rating, rounded to the nearest half rating. For example, if the
average user rating is 4.27, then the rating displayed in the movies list should
be 4.5.

Once you have completed the task, please raise a pull request against your own
main branch. Please _do not_ raise a PR against the upstream repository.

### Considerations

We are looking for candidates to demonstrate their knowledge of Laravel and PHP.
Therefore, candidates should submit production ready, idiomatic code as far as
is possible. Candidates should also use Git branches appropriately, and use
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Getting Started

1. Open the development container in your IDE
2. Change directory to `./app`
3. Start the Vite development server with `npm run dev`
4. Start the Laravel development server with `php artisan serve`
5. Visit `http://localhost:8000/register`

## License

© 2024 Kmbal Ltd. All rights reserved.

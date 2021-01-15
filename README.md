<div align="center">
  <h1>Codepedia 📕</h1>
  <strong>Describe coding concepts in a variety of ways.</strong><br>
  <strong>Built by the community. Maintained by Codecademy.</strong>
</div>
<br>

Welcome to the [Codepedia](https://codecademy.github.io/codepedia) codebase. We are so excited to have you. With your help, we can build out Codepedia’s content to better serve our learners.

Built by the community. Maintained by Codecademy.

📕 https://codecademy.github.io/codepedia

## Adding a new concept

1. Create a folder for the concept in `codepedia`
1. Update `map.json` to include the phrase that should lead to that concept
1. Create a file in said folder with the format `[folder_name].md`.
1. For language specific files, name them as `[folder_name].[language_file_suffix].md`

## Running locally

1. `cd` to the `gh-page` folder
1. Run `yarn && yarn start`
1. Navigate to `localhost:5050` to see the local version of Codepedia

## Commiting development changes

1. Run `yarn build` in the `gh-page` folder to generate the compiled files
1. Commit all files that changed, including the `dist` folder

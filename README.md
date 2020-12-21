# Codepedia

Describe coding concepts in a variety of ways

Link: https://codecademy.github.io/codepedia/

## Adding a new concept

1. Create a folder for the concept in `codepedia`
1. Update `map.json` to include the phrase that should lead to that concept
1. Create a file in said folder with the format `[folder_name].md`.
1. For language specific files, name them as `[folder_name].[language_file_suffix].md`

## Running locally

1. `cd` to the `docs` folder
1. Run `yarn start`

## Commiting development changes

1. Run `yarn build` in the docs folder to generate the compiled files
1. Commit all files that changed, including the `dist` folder

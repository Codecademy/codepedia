<div align="center">
  <h1>Codepedia 📕</h1>
  <strong>Documentation and glossary for popular programming languages.</strong><br>
  <strong>Built by the community. Maintained by Codecademy.</strong>
</div>
<br>

Welcome to the [Codepedia](https://codecademy.github.io/codepedia) codebase. We are so excited to have you. With your help, we can build out Codepedia’s content to better serve our learners. 

If you're interested in contributing, check out our [Contribution Guide](https://github.com/codecademy/codepedia/blob/main/contribute.md).

## Running locally

1. Run `yarn install-all` to download all of the app's dependencies
1. Run `yarn start` in the root folder
1. Navigate to `localhost:5050` to see the local version of Codepedia

> If you're running locally and make changes to any file in a `_meta` folder, you
> will need to re-run the map generator (`yarn build:map`) in order to see those
> changes. There is no live-update version of this script (but you are welcome 
> to create one!)

## Adding a new concept

1. In the root folder, run `yarn new-entry`
1. Follow the prompts to create a new entry for a particular concept / language
1. Open up the Markdown (**[concept].md**) file that the tool generates for you
1. You should be able to see your new entry in the local version of Codepedia (you may need a refresh)
1. When ready to commit your changes, make sure to include the **[concept].md**, **_meta/[concept].json**, and **map.json** files that were changed

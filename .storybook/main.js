module.exports = {
    stories: ['./stories/**/*.stories.ts'],
    addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    './addon-show-vue-markup/register'
],
}
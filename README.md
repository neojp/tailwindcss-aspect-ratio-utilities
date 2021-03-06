<p align="center">
    <a href="https://tailwindcss.com/" target="_blank"><img width="200" src="https://tailwindcss.com/img/tailwind.svg"></a><br>
    A utility-first CSS framework for rapidly building custom user interfaces.
</p>

---

<br>

# Tailwind CSS aspect ratio utilities

This is a Tailwind CSS plugin that adds an utilities for restrict an element with a set [aspect ratio](https://css-tricks.com/aspect-ratio-boxes/) **based on the parent's element's width**.

Maintained by: [Joan Piedra](https://joanpiedra.com) → [@neojp](https://twitter.com/neojp)

## Installation

Install as a node module with either `npm` or `yarn` on your command line

```bash
# Install via npm
npm install --save-dev @neojp/tailwindcss-aspect-ratio-utilities

# Install via yarn
yarn add --dev @neojp/tailwindcss-aspect-ratio-utilities
```

Add this module as a plugin on your [Tailwind configuration file](https://tailwindcss.com/docs/configuration#plugins) (`tailwind.config.js`).

```js
module.exports = {
  plugins: [
      require('@neojp/tailwindcss-aspect-ratio-utilities')
  ]
};
```

### Variants

Note that this plugin allows the usage of variants through the key `aspectRatio` and will default to your global variant setting.

```js
module.exports = {
  variants: {
    aspectRatio: ['responsive']
  }
};
```


## Usage

Use the Tailwind utility classes provided by this plugin.

```html

<div class="aspect-ratio-square"></div>
<div class="aspect-ratio-3/2"></div>
<div class="aspect-ratio-2/3"></div>
<div class="aspect-ratio-4/3"></div>
<div class="aspect-ratio-5/6"></div>
<div class="aspect-ratio-16/9"></div>
<div class="aspect-ratio-21/9"></div>

```

### Examples

Draw a gray 256px square box:

```html
<div class="bg-gray-500 w-64">
  <div class="aspect-ratio-square"></div>
</div>
```

Restrict an image to a 4/3 aspect ratio:

```html
<div class="bg-gray-500 relative w-64">
  <div class="aspect-ratio-4/3"></div>
  <img class="absolute h-full left-0 object-cover top-0 w-full" src="https://images.unsplash.com/photo-1575470066032-42f6bce0c7fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Unsplash stock image by Josh Hild">
</div>
```

Embed a YouTube video and restrict it to an aspect ratio of 16/9:

```html
<div class="bg-gray-400 mx-auto relative w-1/2">
  <div class="aspect-ratio-16/9"></div>
  <iframe class="absolute h-full left-0 top-0 w-full" width="560" height="315" src="https://www.youtube.com/embed/21HuwjmuS7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

## Output

Tailwind will be outputed as follows.

```css
.aspect-ratio-square { padding-top: 100%; }
.aspect-ratio-3\/2   { padding-top: 66.66666666666667%; }
.aspect-ratio-2\/3   { padding-top: 150%; }
.aspect-ratio-4\/3   { padding-top: 75%; }
.aspect-ratio-5\/6   { padding-top: 120%; }
.aspect-ratio-16\/9  { padding-top: 56.25%; }
.aspect-ratio-21\/9  { padding-top: 42.86%; }
```

## Related plugins

Shout out to [tailwindcss-aspect-ratio](https://github.com/webdna/tailwindcss-aspect-ratio) another plugin that attemps to handle aspect ratios on Tailwind CSS.

## Contributing

Feel free to submit a PR request, and send me a message on Twitter ([@neojp](https://twitter.com/neojp)) about it.

## License
This project has been licensed under [the Hippocratic License](https://firstdonoharm.dev/).
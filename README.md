CKEditor 5 custom inline editor build
==============================================


* ```Custom image resize plugin```

========================================

To disbale image resizing (By Mouse): 

And use it in your website:
```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@ckeditor/ckeditor5-custom-build-inline/build/ckeditor.js"></script>
<script>
		function CustomImageResizer(editor) {
			editor.conversion.for('downcast').add(dispatcher => {
				dispatcher.on('attribute:width:image', (evt, data, conversionApi) => {
					if (!conversionApi.consumable.consume(data.item, evt.name)) {
						return;
					}
					const options = editor.config.get('image.resizeOptions');
					const isEnabled = editor.config.get('image.resizeEnabled');
					const sizeLables = options.map((item) => {
						return item.label;
					})
					const attributeNewValue = data.attributeNewValue === null ? "Original" : data.attributeNewValue;
					if (!isEnabled && sizeLables.length > 0 && !sizeLables.includes(attributeNewValue)) {
						editor.execute('imageResize', { width: data.attributeOldValue });
						return evt.stop();
					}

					const viewWriter = conversionApi.writer;
					const figure = conversionApi.mapper.toViewElement(data.item);

					if (data.attributeNewValue !== null) {
						viewWriter.setStyle('width', data.attributeNewValue, figure);
						viewWriter.addClass('image_resized', figure);
					} else {
						viewWriter.removeStyle('width', figure);
						viewWriter.removeClass('image_resized', figure);
					}
				})
			});
		}

		InlineEditor.create(document.querySelector('#editor'), {
			extraPlugins: [CustomImageResizer],
			image: {
				resizeEnabled: false, // You can also disable/enable this feature by setting resizeEnabled configuration option to false OR true.
				resizeOptions: [
					{
						name: 'imageResize:original',
						label: 'Original',
						value: null
					},
					{
						name: 'imageResize:50',
						label: '50%',
						value: '50'
					},
					{
						name: 'imageResize:75',
						label: '75%',
						value: '75'
					}
				],
				toolbar: ['imageResize']
			}
		})
			.then(editor => {
				window.editor = editor;
			})
			.catch(error => {
				console.error('There was a problem initializing the editor.', error);
			});
	</script>
```


[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-inline.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline)
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5-build-inline/status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-inline)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-inline/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-inline?type=dev)

The inline editor build for CKEditor 5. Read more about the [inline editor build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#inline-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/inline-editor.html).

![CKEditor 5 inline editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-inline.png)

## Documentation

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```bash
npm install --save @ckeditor/ckeditor5-custom-build-inline
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@ckeditor/ckeditor5-custom-build-inline/build/ckeditor.js"></script>
<script>
	InlineEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import InlineEditor from '@ckeditor/ckeditor5-custom-build-inline';

// Or using the CommonJS version:
// const InlineEditor = require( '@ckeditor/ckeditor5-custom-build-inline' );

InlineEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).

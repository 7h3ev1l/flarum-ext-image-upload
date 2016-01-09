import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import UploadButton from 'flagrow/remote-image-upload/components/UploadButton';

app.initializers.add('flagrow-remote-image-upload', app => {

    /**
     * Add the upload button to the post composer.
     */
    extend(TextEditor.prototype, 'controlItems', function(items)
    {
        items.add('flarum-remote-image-upload', new UploadButton, 20);
    });
});
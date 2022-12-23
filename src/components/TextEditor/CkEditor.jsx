import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = () => {
  return (
    <div>
      <CKEditor
        className="dark:bg-black"
        editor={ClassicEditor}
        data="<p>Write here your description...</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}

      />
    </div>
  )
}

export default CkEditor
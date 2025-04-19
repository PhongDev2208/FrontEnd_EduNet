// MyEditor.js
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function MyEditor({setcontent,value = "Can you write description"}) {
  const handleEditorChange = (e) =>{
    setcontent(e)
  }

  return (
    <Editor
    apiKey='f18q3hrripelovdw4j8v0sv0xyxk5x4ow2umobuo45gloa4u'
    init={{
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    }}
    initialValue={value}
    onEditorChange={handleEditorChange}

    />
  );
}

export default MyEditor;

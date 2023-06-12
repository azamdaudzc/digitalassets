import React, { useState, useEffect, useCallback } from "react";
import codeing from '../../../../assets/images/codeing.png'
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function AddProducts() {

  const { message } = useSelector((state) => state.message);
  const [editorState, seteditorState] = useState(false);

  const theme_class = message;

  return (
    <div className="formUsContact">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-8 col-xxl-8 col-md-8">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
              <div class="fields top">
                <label for="" class={"dark-text" + ' ' + theme_class + '-text'}>
                  Product Title
                </label>
                <input type="text" class={"dark-text dark-box-border" + ' ' + theme_class + '-text' + ' ' + theme_class + '-box-border'} />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
              <div class="fields">
                <label for="" class={"dark-text" + ' ' + theme_class + '-text'}>
                  Category
                </label>
                <select name="" id="" class={"dark-text dark-box-border" + ' ' + theme_class + '-text' + ' ' + theme_class + '-box-border'}>
                  <option value="">Month</option>
                  <option value="">Month</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
              <div class="fields top">
                <label for="" class={"dark-text" + ' ' + theme_class + '-text'}>
                  Price
                </label>
                <input type="text" class={"dark-text dark-box-border" + ' ' + theme_class + '-text' + ' ' + theme_class + '-box-border'} />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
              <div class="fields top">
                <label for="" class={"dark-text" + ' ' + theme_class + '-text'}>
                  File
                </label>
                <div className={"inputbox" + ' ' + theme_class + '-text' + ' ' + theme_class + '-box-border'}>
                  <button className={theme_class + '-text'}>Upload File</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-12 col-xxl-12 col-md-12">
              <div class="fields top">
                <label for="" class={"dark-text" + ' ' + theme_class + '-text'}>
                  Description
                </label>
               <div className={"ediableDes"+ ' ' + theme_class + '-text' + ' ' + theme_class + '-bg-des' + ' ' + theme_class + '-box-border'}>
               <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={seteditorState}
                />
               </div>
              </div>
            </div>
          </div>
          <div className="buttonSubmit">
            <button>Submit</button>
          </div>

        </div>
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4">

          <div className="imageBorder">
            <img src={codeing} alt="" srcset="" />
          </div>
          <div className="buttonSubmit newzz">
            <button>Upload Image</button>
          </div>

        </div>
      </div>
    </div>
  );
}

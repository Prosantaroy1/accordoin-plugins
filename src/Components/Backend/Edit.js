import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { Theme } from '../theme/Theme';
import { withSelect } from "@wordpress/data";
import ClipBoard from '../Common/ShortCode';



const Edit = (props) => {
  const { attributes, setAttributes, clientId, postId, postType } = props;



  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />



        <div className='faq_question_main_wp_div'>
          {postType == "easy_testimonial" && (
            <ClipBoard shortcode={`[easy_testimonial id=${postId}]`} />
          )}
          <Theme {...{ attributes, setAttributes }} />
        </div>


      </div >
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } =
    select("core/editor");

  return {
    device: getDeviceType ? getDeviceType()?.toLowerCase() : "desktop",
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);

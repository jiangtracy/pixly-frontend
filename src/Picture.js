/** Picture Component
 * Renders a picture
 * 
 * props:
 * - image url
 * 
 * state:
 * - none
 * 
 * App -> Edit -> Picture
  */

function Picture({url}) {
  return (
    <img src={url} alt="picture" />
  );
}

export default Picture;


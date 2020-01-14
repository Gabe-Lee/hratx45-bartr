import React, { PureComponent } from "react";
import ItemDetailPicture from "../components/ItemDetailPicture";
import ItemDetailCarousel from "../components/ItemDetailPictureCarousel";
import ItemDetailItemInfo from "../components/ItemDetailItemInfo";
import ItemDetailMakeOfferButton from "../components/ItemDetailMakeOfferButton";
import "../assets/styles/itemDetail.scss";

export default class ItemDetailPage extends PureComponent {
  render() {
    return (
      <div className="itemDetailPage">
        <div className="itemTitleContainer">
          <h1 className="itemTitle">One Paperclip</h1>
        </div>
        <div className="itemOfferCountContainer">3 people have bid on this item</div>
        <div className="itemDetailImageContainer">
          <ItemDetailPicture />
        </div>
        <div className="itemImageCarouselContainer condensed">
          <ItemDetailCarousel />
        </div>
        <div className="itemValueContainer"><h4>Value: <span>One house</span></h4></div>
        <div className="makeOfferButtonContainer">
          <ItemDetailMakeOfferButton />
        </div>
        <div className="itemInfoContainer">
          <ItemDetailItemInfo />
        </div>
        
      </div>
    );
  }
}
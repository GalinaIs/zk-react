import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
  onBtnClick = e => {
    this.props.getPhotos(+e.currentTarget.innerText)
  }
  renderButtons = () => {
    const years = [2018, 2017, 2016, 2015, 2014]
    return years.map((item, index) => {
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      )
    })
  }
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }
  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>{this.renderButtons()}</p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  error: PropTypes.string,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { getValidationMessage, getValidationErrorClass } from '../../helpers/validation';

class BeerForm extends Component {

    constructor(props) {

        super(props);

        this.state = {
            beer: props.beer,
            validationErrors: props.validationErrors,
            categories: props.categories
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            validationErrors: nextProps.validationErrors
        });
    }

    handleInputChange(event) {

        const beer = this.state.beer;
        const target = event.target;

        beer[target.name] = target.value;

        this.setState({
            beer: beer
        });
    }

    render() {

        return (
            <div>
                 <div className="row">
                    <div className="col-12">
                    <FormGroup>
                        <Label>Category</Label>
                        <Input
                            name="category"
                            type="select"
                            value={this.state.beer.category || undefined}
                            onChange={this.handleInputChange}>
                            {this.props.categories.map(category =>
                                <option key={category.url} value={category.url}>
                                    {category.name}
                                </option>
                            )}
                        </Input>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                            name="name"
                            type="input"
                            className={getValidationErrorClass("name", this.state.validationErrors)}
                            value={this.state.beer.name || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("name", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>IBU</Label>
                        <Input
                            name="ibu"
                            type="number"
                            className={getValidationErrorClass("ibu", this.state.validationErrors)}
                            value={this.state.beer.ibu || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("ibu", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>Calories</Label>
                        <Input
                            name="calories"
                            type="number"
                            className={getValidationErrorClass("calories", this.state.validationErrors)}
                            value={this.state.beer.calories || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("calories", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>Alcohol By Volume</Label>
                        <Input
                            name="abv"
                            type="number"
                            className={getValidationErrorClass("abv", this.state.validationErrors)}
                            value={this.state.beer.abv || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("abv", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>Style</Label>
                        <Input
                            name="style"
                            type="input"
                            className={getValidationErrorClass("style", this.state.validationErrors)}
                            value={this.state.beer.style || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("style", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col-12">
                    <FormGroup>
                        <Label>Location</Label>
                        <Input
                            name="brewery_location"
                            type="input"
                            className={getValidationErrorClass("brewery_location", this.state.validationErrors)}
                            value={this.state.beer.brewery_location || ""}
                            onChange={this.handleInputChange} />
                        <div className="invalid-feedback">
                            {getValidationMessage("brewery_location", this.state.validationErrors)}
                        </div>
                    </FormGroup>
                    </div>
                </div>

                <Button className="mr-1" onClick={() => this.props.cancel()}>Cancel</Button>
                <Button color="primary" onClick={() => this.props.save(this.state.beer)}>Save</Button>

            </div>
        );
    }
}

export default BeerForm

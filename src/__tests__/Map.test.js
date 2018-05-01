import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../components/GoogleMap';
import { mount, shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('<Map /> compoennt', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
        ReactDOM.render(<Map/>, div);
	});

	it('Checking length of parent wrapper', () => {
		const mapArea = mount(<Map />);
		expect(mapArea.find('#mapWrapper').length).toEqual(1);
	});

	it('closePopup function called', () => {
		const mapArea = shallow(<Map />);
		let closePopup = mapArea.dive().instance().closePopup();
		expect(closePopup).toEqual(false);
	});

});

import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Select, { components } from 'react-select';
import { headgearOptions, colourOptions, mouthOptions, skinOptions, eyewearOptions } from '../../../data/data';



const SealAttributes = () => {
    const [selected, setSelected] = useState([]);
    const [sealColorSelected, setSealColorselected] = useState([]);
    const [mouthSelected, setMouthSelected] = useState([]);
    const [skinColorSelected, setSkinColorSelected] = useState([]);
    const [eyeWearSelected, setEyeWearSelected] = useState([]);

    const [values, setValues] = useState({});

    const MoreSelectedBadge = ({ items }) => {

        const title = items.join(", ");
        const length = items.length;
        const label = `+ ${length} more`;
        return (
            <div className='moreSelectText' title={title}>
                {label}
            </div>
        );
    };


    const MultiValue = ({ index, getValue, ...props }) => {
        const maxToShow = 2;
        const overflow = getValue()
            .slice(maxToShow)
            .map((x) => x.label);

        return index < maxToShow ? (
            <components.MultiValue {...props} />
        ) : index === maxToShow ? (
            <MoreSelectedBadge items={overflow} />
        ) : null;
    };


    const Option = props => {

        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };


    const handleChange = selected => {
        setSelected(selected);
      }
      const sealcolorhandleChange = selected => {
        setSealColorselected(selected);
      }
      const mouthhandleChange = selected => {
        setMouthSelected(selected);
      }
      const skincolorhandleChange = selected => {
        setSkinColorSelected(selected);
      }
      const eyewearhandleChange = selected => {
        setEyeWearSelected(selected);
      }

    return (
        <div className='sealattributeB'>
            <div className='sealattributeB__header'>
                <h4>Seal Attributes</h4>
                <a href='#'>Reset Filter</a>
            </div>
            <div className='sealattributeB__box'>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="" controlId="headgear">
                                <Form.Label>Head Gear</Form.Label>
                                <Select
                                    isMulti
                                    name="headgear"
                                    options={headgearOptions}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={selected}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="" controlId="sealcolor">
                                <Form.Label>Seal Color</Form.Label>
                                <Select
                                    isMulti
                                    name="sealcolor"
                                    options={colourOptions}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={sealColorSelected}
                                    onChange={sealcolorhandleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="" controlId="mouth">
                                <Form.Label>Mouth</Form.Label>
                                <Select
                                    isMulti
                                    name="mouth"
                                    options={mouthOptions}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={mouthSelected}
                                    onChange={mouthhandleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="" controlId="skincolor">
                                <Form.Label>Skin color</Form.Label>
                                <Select
                                    isMulti
                                    name="skincolor"
                                    options={skinOptions}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={skinColorSelected}
                                    onChange={skincolorhandleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="" controlId="eyewear">
                                <Form.Label>Eye Wear</Form.Label>
                                <Select
                                    isMulti
                                    name="eyewear"
                                    options={eyewearOptions}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={eyeWearSelected}
                                    onChange={eyewearhandleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </div>
        </div>
    )
}

export default SealAttributes
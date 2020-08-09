import React, { Component } from 'react';
//import { API, Storage } from 'aws-amplify';
//import { createSong as createSongMutation } from '../../graphql/mutations';

export default class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAudioFiles: 1,
            formData: {
                groupID: '',
                title: '',
                description: '',
                grade: '',
                length: '',
                image: '',
                score: '',
                audio: [],
                order: 1
            }
        }
    }

    createSong = async () => {
        const { numAudioFiles, formData } = this.state;

        formData.groupID = formData.groupID || this.props.group.id;

        if (!formData.groupID || !formData.grade || !formData.title) {
            console.log("you are missing one of the crucial 3!");
            console.log('groupId: ' + formData.groupID);
            console.log('title: ' + formData.title);
            console.log('grade: ' + formData.grade);
            return;
        }

        for (let i = 0; i < numAudioFiles; i++) {
            formData.audio[i] = await Storage.get(formData.audio[i]);
        }
        
        formData.image = await Storage.get(formData.image);
        formData.score = await Storage.get(formData.score);

        // this.setState({ formData });
            
        console.log(`form data prior to API call for new song: ${{...formData}}`);
        
        // try {
        //     const newSong = await API.graphql({   // here is an example of both query and variables being passed
        //         query: createSongMutation,
        //         variables: { input: this.state.formData },
        //     });
        //     console.log({...newSong});
        // } catch (err) {
        //     console.log(err.message);
        // }
        
        // this.setState({
        //     numAudioFiles: 1,
        //     formData: { 
        //         groupID: '', title: '', description: '', length: '', image: '',
        //         score: '', audio: [], order: 1, grade: ''
        //     }
        // });
    }

    onTextChange = e => {
        const { name, value } = e.target;
        const formData = this.state.formData;

        formData[name] = value;
        this.setState({ formData });
    }

    onFileChange = async (e) => {
        const { name, files } = e.target;
        const formData = this.state.formData;

        if (!files[0]) return;

        const file = files[0];
        //const newStoredFile = await Storage.put(file.name, file);

        if (name === 'score' || name === 'image') {
            formData[name] = newStoredFile;
            
        } else {
            // get file number from key
            const index = name.split("-")[1];
            console.log("audio index is: " + index);
            formData.audio[index] = newStoredFile;
            
        }

        this.setState({ formData });
    }

    render() {
        return (
            <div className="add-song form" style={{ border: '1px solid black' }}>
                <h2>Add Song</h2>
                <label for="title">Title: </label>
                <input name="title" onChange={this.onTextChange} value={this.state.formData.title} />

                <label for="description">Description: </label>
                <textArea name="description" rows="10" onChange={this.onTextChange}>
                    {this.state.formData.description}
                </textArea>

                <label for="grade">Grade: </label>
                <input name="grade" onChange={this.onTextChange} value={this.state.formData.grade} />
                
                <label for="order">Layout Order (1 for highest priority): </label>
                <input type="number" name="order" onChange={this.onTextChange} value={this.state.formData.order} />
                
                <label for="length">Duration: </label>
                <input  name="length" onChange={this.onTextChange} value={this.state.formData.length} />
    
                <label for="image">Image: </label>
                <input type="file" name="image" onChange={this.onFileChange} />
                
                <label for="score">Evaluation Score: </label>
                <input type="file" name="score" onChange={this.onFileChange} />
    
                <label for="audio">Audio: </label>
                <input type="file" name="audio-0" onChange={this.onFileChange} />
    
                <button onClick={this.createSong}>Add Song</button>
            </div>
        );
    }
}
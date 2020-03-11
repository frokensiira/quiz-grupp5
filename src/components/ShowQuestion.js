import React from 'react'
import ShowAnswer from './ShowAnswer';



class ShowQuestion extends React.Component {

    state = {
        answers: []
    }

    componentDidMount(){

        console.log('props.quizItem.answers from ShowQuestion is', this.props.quizItem.answers);
        //console.log('this.props from ShowAnswer is', this.props);
        //this.props.answer.sort(function (a, b) { return 0.5 - Math.random() })

        let answers = [...this.props.quizItem.answers]
        let randomizedAnswers = []

        console.log('answers are', answers);

        while(answers.length !== 0){
            let randomIndex = Math.floor(Math.random()* answers.length)

            randomizedAnswers.push(answers[randomIndex])

            answers.splice(randomIndex, 1)
        }

        this.setState({
            answers: randomizedAnswers
        })        
    }

    render() {     

        console.log(this.state.answers);
       
        const answerList = this.state.answers.map(answer =>{

            return <ShowAnswer quizPoint={this.props.quizItem.points} quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleGuessedAnswers={this.props.handleGuessedAnswers}/>
            
        });
        //answerList.sort(function (a, b) { return 0.5 - Math.random() });

        

        return(
            <div className="quiz py-4 bg-primary mb-4">
                <div className="container">
                    <div className="my-5">
                        <p className="lead font-weight-normal">{this.props.quizItem.id}. {this.props.quizItem.question} ({this.props.quizItem.points} poäng)</p>
                        {answerList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowQuestion;



/* import React from 'react'
import ShowAnswer from './ShowAnswer';



class ShowQuestion extends React.Component {

    state = {
        answers: []
    }

    componentDidMount(){

        // console.log('props.quizItem.answers from ShowQuestion is', this.props.quizItem.answers);
        // //console.log('this.props from ShowAnswer is', this.props);
        // //this.props.answer.sort(function (a, b) { return 0.5 - Math.random() })

        // let answers = [...this.props.quizItem.answers]
        // let randomizedAnswers = []

        // console.log('answers are', answers);

        // while(answers.length !== 0){
        //     let randomIndex = Math.floor(Math.random()* answers.length)

        //     randomizedAnswers.push(answers[randomIndex])

        //     answers.splice(randomIndex, 1)
        // }

        // this.setState({
        //     answers: randomizedAnswers
        // })        
    }

    render() {     
       
        const answerList = this.props.quizItem.answers.map(answer =>{

            return <ShowAnswer quizPoint={this.props.quizItem.points} quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleGuessedAnswers={this.props.handleGuessedAnswers}/>
            
        });
        //answerList.sort(function (a, b) { return 0.5 - Math.random() });

        

        return(
            <div className="quiz py-4 bg-primary mb-4">
                <div className="container">
                    <div className="my-5">
                        <p className="lead font-weight-normal">{this.props.quizItem.id}. {this.props.quizItem.question} ({this.props.quizItem.points} poäng)</p>
                        {answerList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowQuestion; */
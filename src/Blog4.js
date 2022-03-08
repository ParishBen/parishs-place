
const Blog4 = () => {
    return (
        // <div  /*style={{backgroundColor:'#ad9c3a', position:'relative',top:'12pt'}}*/>
         <div class="container-fluid" style={{backgroundColor:'gold', boxShadow: '0 0 20px black',textAlign:'center', paddingBottom: '10px', paddingLeft:'3pt' }}>

            <h2> Hails for Rails</h2>
            <p><t/>There is so much to appreciate when it comes the framework and macros provided with the “magic” of rails. All kicking off with <code>rails new 'project name'</code> and it only expands from there. The generators, resources, validations, and countless macros to help you hit the ground running. 
Despite appreciating all the tools Rails provides, there were still major obstacles, countless errors, and difficulties completing the project. Since I have the opposite of a green thumb- I decided to make an application that would allow users to create a collection of plants that would easily track their care & progress. In addition to that users can view all others’ plants and give tips/pointers in the form of comments. I found getting correct functionality on nested forms and nested resources is where I ran into the majority of errors. I eventually troubleshooted through it and got the views and routes as intended. The Google Oauth was a great piece of the project that challenged me to get working functionality but really was neat to see how you can pull data from the oauth request and apply that data to an object of a class.
The project was such a process to get all the moving parts and models operating correctly together, but I find that I really have to focus on one model, one method, one piece at a time and test by calling raise params or through a pry in there AND THEN COMMIT. I started off not following that advice and found that it really made things more difficult for me. It truly becomes much more manageable narrowing the scope of project to just one task at a time. I found it very beneficial having Faker gem data seeds in the database to see how things were working in the views. The scope methods were a nice touch to control how your data is displayed and, in my case, it was a nice way to give an index view of most popular plants & users with the most plants. The feeling of accomplishment is real!</p>
        </div>
    )
}

export default Blog4





import Card from './components/Card.jsx'

const App = () => {

  const arr = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    title: "Frontend Developer",
    datePosted: "5 days ago",
    type: "Full-time",
    experience: "Junior",
    salaryPerHour: '$55/hr',
    location: { city: "Mountain View", country: "USA" }
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    title: "Cloud Engineer",
    datePosted: "2 days ago",
    type: "Full-time",
    experience: "Senior",
    salaryPerHour: '$70/hr',
    location: { city: "Seattle", country: "USA" }
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    title: "Data Analyst",
    datePosted: "7 days ago",
    type: "Part-time",
    experience: "Junior",
    salaryPerHour: '$40/hr',
    location: { city: "London", country: "UK" }
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    title: "Machine Learning Engineer",
    datePosted: "1 day ago",
    type: "Full-time",
    experience: "Senior",
    salaryPerHour: '$85/hr',
    location: { city: "Los Angeles", country: "USA" }
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    title: "Backend Developer",
    datePosted: "3 days ago",
    type: "Full-time",
    experience: "Mid-level",
    salaryPerHour: '$60/hr',
    location: { city: "Dublin", country: "Ireland" }
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    title: "UI/UX Designer",
    datePosted: "8 days ago",
    type: "Part-time",
    experience: "Junior",
    salaryPerHour: '$45/hr',
    location: { city: "Stockholm", country: "Sweden" }
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    title: "iOS Developer",
    datePosted: "4 days ago",
    type: "Full-time",
    experience: "Senior",
    salaryPerHour: '$75/hr',
    location: { city: "Cupertino", country: "USA" }
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    title: "Software Engineer",
    datePosted: "9 days ago",
    type: "Full-time",
    experience: "Mid-level",
    salaryPerHour: '$65/hr',
    location: { city: "Berlin", country: "Germany" }
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Adobe",
    title: "DevOps Engineer",
    datePosted: "6 days ago",
    type: "Full-time",
    experience: "Senior",
    salaryPerHour: '$68/hr',
    location: { city: "San Jose", country: "USA" }
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    title: "Product Manager",
    datePosted: "2 days ago",
    type: "Part-time",
    experience: "Senior",
    salaryPerHour: '$80/hr',
    location: { city: "Toronto", country: "Canada" }
  }
];




  return (
    <div className='parent'>
        {arr.map(function(element,idx){
        return <div key={idx}>
            <Card  company={element.companyName} post={element.title} logo={element.brandLogo} date={element.datePosted} type={element.type} level={element.experience} pay={element.salaryPerHour} city={element.location.city} cont={element.location.country} pic={element.brandLogo}/>
          </div>

        })}
    </div>
  )
}

export default App

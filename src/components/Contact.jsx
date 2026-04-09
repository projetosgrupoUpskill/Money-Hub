
const contacts = [
    {id:1 , 
	profileImg: "https://avatars.githubusercontent.com/u/168200274?v=4",
	name: "Natália Carvalho de Pinho Joaquim",
        studentNumber: 219,
        gitHubLink: "https://github.com/natipinho"
    },
        {id:2 , 
	profileImg: "https://avatars.githubusercontent.com/u/203020275?v=4",
	name: "Rebeca Luiza Soares Cerqueira",
        studentNumber: 224,
        gitHubLink: "https://github.com/Rebeca-Soares"
    }
]

function ContactCard () {
const contactDetails = contacts.map (contact => 
( <div key={contact.id}>
<img src={contact.profileImg} alt={contact.name} />
<b>{contact.name}</b>
<br />
<p>Student Number:{contact.studentNumber}</p>
<p>{contact.gitHubLink}</p>
</div>
));
return contactDetails;
};

export default ContactCard
import React, { useState } from "react";
import {
  Form,
  Select,
  Input,
  DatePicker,
  InputNumber,
  TreeSelect,
  Cascader,
  Button,
  message,
  Upload,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ApplicationForm.css";
// import "./ApplicationForm.css"
const ApplicationForm = () => {
  const [uploading, setUploading] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const displayRender = (labels) => labels[labels.length - 1];
  const [photoLink, setPhotoLink] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  // const onChangePhoto = async (options) => {
  //     const { file, onSuccess, onError } = options;

  //     if (file.status === 'uploading') {
  //         setUploading(true);
  //         return;
  //     }

  //     if (file.status === 'done') {
  //         message.success(`${file.name} file uploaded successfully.`);
  //         onSuccess();
  //         setUploading(false);
  //         return;
  //     }

  //     if (file.status === 'error') {
  //         message.error(`Upload failed: ${file.error.message}`);
  //         onError(file.error);
  //         setUploading(false);
  //         return;
  //     }

  //     const formData = new FormData();
  //     formData.append('file', file.originFileObj);

  //     try {
  //         const response = await fetch('https://napi.prepseed.com/chats/uploadPolicy', {
  //             method: 'POST',
  //             body: formData,
  //         });

  //         if (response.ok) {
  //             const data = await response.json();
  //             console.log('Upload successful:', data); // Log the data here
  //             message.success(`${file.name} file uploaded successfully.`);
  //             onSuccess(data); // Call onSuccess with the response data if needed
  //         } else {
  //             const errorData = await response.json();
  //             message.error(`Upload failed: ${errorData.message || 'Unknown error'}`);
  //             onError(new Error(errorData.message || 'Unknown error'));
  //         }
  //     } catch (error) {
  //         message.error(`Upload failed: ${error.message}`);
  //         onError(error);
  //     } finally {
  //         setUploading(false);
  //     }
  // };
  const handleUploadChange = async (info) => {
    console.log("info", info);
    const fileType = info.file.type.split("/")[1];
    const requestBody = {
      fileName: info.file.name,
      mime: fileType,
    };
    const response = await fetch(
      `https://napi.prepseed.com/chats/uploadPolicy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${window.localStorage.getItem("token")}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    const data = await response.json();
    if (data) {
      const finalUrl = data.data.url + data.filePath;
      setPhotoLink(finalUrl);
    } else {
      notification.error({ message: "Error while uploading photo" });
    }
  };
  const handleResumeChange = async (info) => {
    console.log("info", info);
    const fileType = info.file.type.split("/")[1];
    const requestBody = {
      fileName: info.file.name,
      mime: fileType,
    };
    const response = await fetch(
      `https://napi.prepseed.com/chats/uploadPolicy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${window.localStorage.getItem("token")}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    const data = await response.json();
    if (data) {
      const finalUrl = data.data.url + data.filePath;
      setResumeLink(finalUrl);
    } else {
      notification.error({ message: "Error while uploading Resume" });
    }
  };
  const handleSubmit = async (data) => {
    if (data) {
      console.log("Data to be sent:", data);
      try {
        const response = await fetch(
          "https://napi.prepseed.com/hightech/addApplication",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convert formData to JSON
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("API Response:", result);
        } else {
          console.error("API request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error sending data to API:", error);
      }
    }
  };

  const treeCurrentLocationData = [
    {
      value: "Haryana",
      label: "Haryana",
      children: [
        { value: "Ambala", label: "Ambala" },
        { value: "Bhiwani", label: "Bhiwani" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Faridabad", label: "Faridabad" },
        { value: "Firozpur Jhirka", label: "Firozpur Jhirka" },
        { value: "Gurugram", label: "Gurugram" },
        { value: "Hansi", label: "Hansi" },
        { value: "Hisar", label: "Hisar" },
        { value: "Jind", label: "Jind" },
        { value: "Kaithal", label: "Kaithal" },
        { value: "Karnal", label: "Karnal" },
        { value: "Kurukshetra", label: "Kurukshetra" },
        { value: "Panipat", label: "Panipat" },
        { value: "Pehowa", label: "Pehowa" },
        { value: "Rewari", label: "Rewari" },
        { value: "Rohtak", label: "Rohtak" },
        { value: "Sirsa", label: "Sirsa" },
        { value: "Sonipat", label: "Sonipat" },
      ],
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
      children: [
        { value: "Bilaspur", label: "Bilaspur" },
        { value: "Chamba", label: "Chamba" },
        { value: "Dalhousie", label: "Dalhousie" },
        { value: "Dharmshala", label: "Dharmshala" },
        { value: "Hamirpur", label: "Hamirpur" },
        { value: "Kangra", label: "Kangra" },
        { value: "Kullu", label: "Kullu" },
        { value: "Mandi", label: "Mandi" },
        { value: "Nahan", label: "Nahan" },
        { value: "Shimla", label: "Shimla" },
        { value: "Una", label: "Una" },
      ],
    },
    {
      value: "Jammu and Kashmir (union territory)",
      label: "Jammu and Kashmir (union territory)",
      children: [
        { value: "Anantnag", label: "Anantnag" },
        { value: "Baramula", label: "Baramula" },
        { value: "Doda", label: "Doda" },
        { value: "Gulmarg", label: "Gulmarg" },
        { value: "Jammu", label: "Jammu" },
        { value: "Kathua", label: "Kathua" },
        { value: "Punch", label: "Punch" },
        { value: "Rajouri", label: "Rajouri" },
        { value: "Srinagar", label: "Srinagar" },
        { value: "Udhampur", label: "Udhampur" },
      ],
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
      children: [
        { value: "Bokaro", label: "Bokaro" },
        { value: "Chaibasa", label: "Chaibasa" },
        { value: "Deoghar", label: "Deoghar" },
        { value: "Dhanbad", label: "Dhanbad" },
        { value: "Dumka", label: "Dumka" },
        { value: "Giridih", label: "Giridih" },
        { value: "Hazaribag", label: "Hazaribag" },
        { value: "Jamshedpur", label: "Jamshedpur" },
        { value: "Jharia", label: "Jharia" },
        { value: "Rajmahal", label: "Rajmahal" },
        { value: "Ranchi", label: "Ranchi" },
        { value: "Saraikela", label: "Saraikela" },
      ],
    },
    {
      value: "Karnataka",
      label: "Karnataka",
      children: [
        { value: "Badami", label: "Badami" },
        { value: "Ballari", label: "Ballari" },
        { value: "Bengaluru", label: "Bengaluru" },
        { value: "Belagavi", label: "Belagavi" },
        { value: "Bhadravati", label: "Bhadravati" },
        { value: "Bidar", label: "Bidar" },
        { value: "Chikkamagaluru", label: "Chikkamagaluru" },
        { value: "Chitradurga", label: "Chitradurga" },
        { value: "Davangere", label: "Davangere" },
        { value: "Halebid", label: "Halebid" },
        { value: "Hassan", label: "Hassan" },
        { value: "Hubballi-Dharwad", label: "Hubballi-Dharwad" },
        { value: "Kalaburagi", label: "Kalaburagi" },
        { value: "Kolar", label: "Kolar" },
        { value: "Madikeri", label: "Madikeri" },
        { value: "Mandya", label: "Mandya" },
        { value: "Mangaluru", label: "Mangaluru" },
        { value: "Mysuru", label: "Mysuru" },
        { value: "Raichur", label: "Raichur" },
        { value: "Shivamogga", label: "Shivamogga" },
        { value: "Shravanabelagola", label: "Shravanabelagola" },
        { value: "Shrirangapattana", label: "Shrirangapattana" },
        { value: "Tumakuru", label: "Tumakuru" },
        { value: "Vijayapura", label: "Vijayapura" },
      ],
    },
    {
      value: "Kerala",
      label: "Kerala",
      children: [
        { value: "Alappuzha", label: "Alappuzha" },
        { value: "Vatakara", label: "Vatakara" },
        { value: "Idukki", label: "Idukki" },
        { value: "Kannur", label: "Kannur" },
        { value: "Kochi", label: "Kochi" },
        { value: "Kollam", label: "Kollam" },
        { value: "Kottayam", label: "Kottayam" },
        { value: "Kozhikode", label: "Kozhikode" },
        { value: "Mattancheri", label: "Mattancheri" },
        { value: "Palakkad", label: "Palakkad" },
        { value: "Thalassery", label: "Thalassery" },
        { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
        { value: "Thrissur", label: "Thrissur" },
      ],
    },
    {
      value: "Ladakh (union territory)",
      label: "Ladakh (union territory)",
      children: [
        { value: "Kargil", label: "Kargil" },
        { value: "Leh", label: "Leh" },
      ],
    },
    {
      value: "Madhya Pradesh",
      label: "Madhya Pradesh",
      children: [
        { value: "Balaghat", label: "Balaghat" },
        { value: "Barwani", label: "Barwani" },
        { value: "Betul", label: "Betul" },
        { value: "Bharhut", label: "Bharhut" },
        { value: "Bhind", label: "Bhind" },
        { value: "Bhojpur", label: "Bhojpur" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Burhanpur", label: "Burhanpur" },
        { value: "Chhatarpur", label: "Chhatarpur" },
        { value: "Chhindwara", label: "Chhindwara" },
        { value: "Damoh", label: "Damoh" },
        { value: "Datia", label: "Datia" },
        { value: "Dewas", label: "Dewas" },
        { value: "Dhar", label: "Dhar" },
        {
          value: "Dr. Ambedkar Nagar (Mhow)",
          label: "Dr. Ambedkar Nagar (Mhow)",
        },
        { value: "Guna", label: "Guna" },
        { value: "Gwalior", label: "Gwalior" },
        { value: "Hoshangabad", label: "Hoshangabad" },
        { value: "Indore", label: "Indore" },
        { value: "Itarsi", label: "Itarsi" },
        { value: "Jabalpur", label: "Jabalpur" },
        { value: "Jhabua", label: "Jhabua" },
        { value: "Khajuraho", label: "Khajuraho" },
        { value: "Khandwa", label: "Khandwa" },
        { value: "Khargone", label: "Khargone" },
        { value: "Maheshwar", label: "Maheshwar" },
        { value: "Mandla", label: "Mandla" },
        { value: "Mandsaur", label: "Mandsaur" },
        { value: "Morena", label: "Morena" },
        { value: "Murwara", label: "Murwara" },
        { value: "Narsimhapur", label: "Narsimhapur" },
        { value: "Narsinghgarh", label: "Narsinghgarh" },
        { value: "Narwar", label: "Narwar" },
        { value: "Neemuch", label: "Neemuch" },
        { value: "Nowgong", label: "Nowgong" },
        { value: "Orchha", label: "Orchha" },
        { value: "Panna", label: "Panna" },
        { value: "Raisen", label: "Raisen" },
        { value: "Rajgarh", label: "Rajgarh" },
        { value: "Ratlam", label: "Ratlam" },
        { value: "Rewa", label: "Rewa" },
        { value: "Sagar", label: "Sagar" },
        { value: "Sarangpur", label: "Sarangpur" },
        { value: "Satna", label: "Satna" },
        { value: "Sehore", label: "Sehore" },
        { value: "Seoni", label: "Seoni" },
        { value: "Shahdol", label: "Shahdol" },
        { value: "Shajapur", label: "Shajapur" },
        { value: "Sheopur", label: "Sheopur" },
        { value: "Shivpuri", label: "Shivpuri" },
        { value: "Ujjain", label: "Ujjain" },
        { value: "Vidisha", label: "Vidisha" },
      ],
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
      children: [
        { value: "Ahmadnagar", label: "Ahmadnagar" },
        { value: "Akola", label: "Akola" },
        { value: "Amravati", label: "Amravati" },
        { value: "Aurangabad", label: "Aurangabad" },
        { value: "Bhandara", label: "Bhandara" },
        { value: "Bhusawal", label: "Bhusawal" },
        { value: "Bid", label: "Bid" },
        { value: "Buldhana", label: "Buldhana" },
        { value: "Chandrapur", label: "Chandrapur" },
        { value: "Daulatabad", label: "Daulatabad" },
        { value: "Dhule", label: "Dhule" },
        { value: "Jalgaon", label: "Jalgaon" },
        { value: "Kalyan", label: "Kalyan" },
        { value: "Karli", label: "Karli" },
        { value: "Kolhapur", label: "Kolhapur" },
        { value: "Mahabaleshwar", label: "Mahabaleshwar" },
        { value: "Malegaon", label: "Malegaon" },
        { value: "Matheran", label: "Matheran" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Nagpur", label: "Nagpur" },
        { value: "Nanded", label: "Nanded" },
        { value: "Nashik", label: "Nashik" },
        { value: "Osmanabad", label: "Osmanabad" },
        { value: "Pandharpur", label: "Pandharpur" },
        { value: "Parbhani", label: "Parbhani" },
        { value: "Pune", label: "Pune" },
        { value: "Ratnagiri", label: "Ratnagiri" },
        { value: "Sangli", label: "Sangli" },
        { value: "Satara", label: "Satara" },
        { value: "Sevagram", label: "Sevagram" },
        { value: "Solapur", label: "Solapur" },
        { value: "Thane", label: "Thane" },
        { value: "Ulhasnagar", label: "Ulhasnagar" },
        { value: "Vasai-Virar", label: "Vasai-Virar" },
        { value: "Wardha", label: "Wardha" },
        { value: "Yavatmal", label: "Yavatmal" },
      ],
    },
    {
      value: "Manipur",
      label: "Manipur",
      children: [{ value: "Imphal", label: "Imphal" }],
    },
    {
      value: "Meghalaya",
      label: "Meghalaya",
      children: [
        { value: "Cherrapunji", label: "Cherrapunji" },
        { value: "Shillong", label: "Shillong" },
      ],
    },
    {
      value: "Mizoram",
      label: "Mizoram",
      children: [
        { value: "Aizawl", label: "Aizawl" },
        { value: "Lunglei", label: "Lunglei" },
      ],
    },
    {
      value: "Nagaland",
      label: "Nagaland",
      children: [
        { value: "Kohima", label: "Kohima" },
        { value: "Mon", label: "Mon" },
        { value: "Phek", label: "Phek" },
        { value: "Wokha", label: "Wokha" },
        { value: "Zunheboto", label: "Zunheboto" },
      ],
    },
    {
      value: "Odisha",
      label: "Odisha",
      children: [
        { value: "Balangir", label: "Balangir" },
        { value: "Baleshwar", label: "Baleshwar" },
        { value: "Baripada", label: "Baripada" },
        { value: "Bhubaneshwar", label: "Bhubaneshwar" },
        { value: "Brahmapur", label: "Brahmapur" },
        { value: "Cuttack", label: "Cuttack" },
        { value: "Dhenkanal", label: "Dhenkanal" },
        { value: "Kendujhar", label: "Kendujhar" },
        { value: "Konark", label: "Konark" },
        { value: "Koraput", label: "Koraput" },
        { value: "Paradip", label: "Paradip" },
        { value: "Phulabani", label: "Phulabani" },
        { value: "Puri", label: "Puri" },
        { value: "Sambalpur", label: "Sambalpur" },
        { value: "Mainpuri", label: "Mainpuri" },
        { value: "Mathura", label: "Mathura" },
        { value: "Meerut", label: "Meerut" },
        { value: "Mirzapur", label: "Mirzapur" },
        { value: "Moradabad", label: "Moradabad" },
        { value: "Muzaffarnagar", label: "Muzaffarnagar" },
        { value: "Partapgarh", label: "Partapgarh" },
        { value: "Pilibhit", label: "Pilibhit" },
        { value: "Prayagraj", label: "Prayagraj" },
        { value: "Rae Bareli", label: "Rae Bareli" },
        { value: "Rampur", label: "Rampur" },
        { value: "Saharanpur", label: "Saharanpur" },
        { value: "Sambhal", label: "Sambhal" },
        { value: "Shahjahanpur", label: "Shahjahanpur" },
        { value: "Sitapur", label: "Sitapur" },
        { value: "Sultanpur", label: "Sultanpur" },
        { value: "Tehri", label: "Tehri" },
        { value: "Varanasi", label: "Varanasi" },
      ],
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
      children: [
        { value: "Almora", label: "Almora" },
        { value: "Dehra Dun", label: "Dehra Dun" },
        { value: "Haridwar", label: "Haridwar" },
        { value: "Mussoorie", label: "Mussoorie" },
        { value: "Nainital", label: "Nainital" },
        { value: "Pithoragarh", label: "Pithoragarh" },
      ],
    },
    {
      value: "West Bengal",
      label: "West Bengal",
      children: [
        { value: "Alipore", label: "Alipore" },
        { value: "Alipur Duar", label: "Alipur Duar" },
        { value: "Asansol", label: "Asansol" },
        { value: "Baharampur", label: "Baharampur" },
        { value: "Bally", label: "Bally" },
        { value: "Balurghat", label: "Balurghat" },
        { value: "Bankura", label: "Bankura" },
        { value: "Baranagar", label: "Baranagar" },
        { value: "Barasat", label: "Barasat" },
        { value: "Barrackpore", label: "Barrackpore" },
        { value: "Basirhat", label: "Basirhat" },
        { value: "Bhatpara", label: "Bhatpara" },
        { value: "Bishnupur", label: "Bishnupur" },
        { value: "Budge Budge", label: "Budge Budge" },
        { value: "Burdwan", label: "Burdwan" },
        { value: "Chandernagore", label: "Chandernagore" },
        { value: "Darjeeling", label: "Darjeeling" },
        { value: "Diamond Harbour", label: "Diamond Harbour" },
        { value: "Dum Dum", label: "Dum Dum" },
        { value: "Durgapur", label: "Durgapur" },
        { value: "Halisahar", label: "Halisahar" },
        { value: "Haora", label: "Haora" },
        { value: "Hugli", label: "Hugli" },
        { value: "Ingraj Bazar", label: "Ingraj Bazar" },
        { value: "Jalpaiguri", label: "Jalpaiguri" },
        { value: "Kalimpong", label: "Kalimpong" },
        { value: "Kamarhati", label: "Kamarhati" },
        { value: "Kanchrapara", label: "Kanchrapara" },
        { value: "Kharagpur", label: "Kharagpur" },
        { value: "Cooch Behar", label: "Cooch Behar" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Krishnanagar", label: "Krishnanagar" },
        { value: "Malda", label: "Malda" },
        { value: "Midnapore", label: "Midnapore" },
        { value: "Murshidabad", label: "Murshidabad" },
        { value: "Nabadwip", label: "Nabadwip" },
        { value: "Palashi", label: "Palashi" },
        { value: "Panihati", label: "Panihati" },
        { value: "Purulia", label: "Purulia" },
        { value: "Raiganj", label: "Raiganj" },
        { value: "Santipur", label: "Santipur" },
        { value: "Shantiniketan", label: "Shantiniketan" },
        { value: "Shrirampur", label: "Shrirampur" },
        { value: "Siliguri", label: "Siliguri" },
        { value: "Siuri", label: "Siuri" },
        { value: "Tamluk", label: "Tamluk" },
        { value: "Titagarh", label: "Titagarh" },
      ],
    },
  ];

  const treeHomeData = [
    {
      value: "Gujarat",
      title: "Gujarat",
      children: [
        {
          value: "Ahmedabad",
          title: "Ahmedabad",
        },
        {
          value: "Surat",
          title: "Surat",
        },
        {
          value: "Vadodara",
          title: "Vadodara",
        },
        {
          value: "Rajkot",
          title: "Rajkot",
        },
      ],
    },
  ];
  const referenceData = [
    {
      value: "Social Media",
      label: "Social Media",
      children: [
        {
          value: "WhatsApp",
          label: "WhatsApp",
        },
        {
          value: "LinkedIn",
          label: "LinkedIn",
        },
        {
          value: "NewsPaper",
          label: "News Paper",
        },
      ],
    },
    {
      value: "Refer a Friend",
      label: "Refer a Friend",
    },
    {
      value: "Job Portal",
      label: "Job Portal",
      children: [
        {
          value: "Naukri",
          label: "Naukri",
        },
      ],
    },
    {
      value: "Company Portal",
      label: "Company Portal",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const handleFinish = (values) => {
    // Function to format date in YYYY-MM-DD
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString; // If invalid date, return original string
      return date.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
    };

    // Convert all values to strings and format dob
    const processedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => {
        if (key == "photo") {
          return [key, photoLink];
        } else if (key == "resume") {
          return [key, resumeLink];
        }
        if (key === "dob") {
          return [key, formatDate(value)]; // Format dob specifically
        }
        if (Array.isArray(value)) {
          return [key, value.join(",")]; // Convert arrays to comma-separated strings
        }
        if (typeof value === "object" && value !== null) {
          return [key, JSON.stringify(value)]; // Convert objects to JSON strings
        }
        return [key, String(value)]; // Convert other values to strings
      })
    );

    console.log("Processed Form Data:", processedValues);
    setFormData(processedValues);
    handleSubmit(processedValues); // Pass the processed data to the handleSubmit function
  };

  return (
    <>
      <div id="ApplicationForm">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 10000 }}
          onFinish={handleFinish}
        >
          <div className="Adjust">
            <Form.Item
              label="Department Applied For"
              name="departmentAppliedFor"
              rules={[
                { required: true, message: "Please select a department" },
              ]}
            >
              <Select>
                <Select.Option value="department1">Department 1</Select.Option>
                <Select.Option value="department2">Department 2</Select.Option>
                <Select.Option value="department3">Department 3</Select.Option>
                <Select.Option value="department4">Department 4</Select.Option>
                <Select.Option value="department5">Department 5</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Position Applied For"
              name="positionAppliedFor"
              rules={[{ required: true, message: "Please select a position" }]}
            >
              <Select>
                <Select.Option value="Project Managers">
                  Project Managers
                </Select.Option>
                <Select.Option value="Sr. Engineers">
                  Sr. Engineers
                </Select.Option>
                <Select.Option value="Assistant Engineers">
                  Assistant Engineers
                </Select.Option>
                <Select.Option value="Jr. Engineer">Jr. Engineer</Select.Option>
                <Select.Option value="Supervisors">Supervisors</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item label="Skill" name="skill">
              <Input placeholder="Skills" />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name Here" />
            </Form.Item>
          </div>
          <div className="Adjust">
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select your gender">
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="DOB"
              name="dob"
              rules={[
                { required: true, message: "Please select your date of birth" },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                { required: true, message: "Please enter your contact number" },
              ]}
            >
              <Input placeholder="Enter your Contact Number" />
            </Form.Item>

            <Form.Item label="Email ID" name="emailId">
              <Input placeholder="Enter your Email ID" />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Qualification"
              name="qualification"
              rules={[
                { required: true, message: "Please select your qualification" },
              ]}
            >
              <Select>
                <Select.Option value="qualification1">
                  Qualification 1
                </Select.Option>
                <Select.Option value="qualification2">
                  Qualification 2
                </Select.Option>
                <Select.Option value="qualification3">
                  Qualification 3
                </Select.Option>
                <Select.Option value="qualification4">
                  Qualification 4
                </Select.Option>
                <Select.Option value="qualification5">
                  Qualification 5
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Current Company Name"
              name="currentCompanyName"
              rules={[
                {
                  required: true,
                  message: "Please enter your current company name",
                },
              ]}
            >
              <Input placeholder="Enter your Current Company Name" />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item label="Current Designation" name="currentDesignation">
              <Input placeholder="Enter your Current Company Designation" />
            </Form.Item>

            <Form.Item
              label="Total Experience (In Years)"
              name="totalExperience"
              rules={[
                {
                  required: true,
                  message: "Please enter your total experience",
                },
              ]}
            >
              <InputNumber min={1} max={10} />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Current Location"
              name="currentLocation"
              rules={[
                {
                  required: true,
                  message: "Please select your current location",
                },
              ]}
            >
              <Cascader options={treeCurrentLocationData} />
            </Form.Item>

            <Form.Item
              label="Home"
              name="home"
              rules={[
                { required: true, message: "Please select your home location" },
              ]}
            >
              <TreeSelect
                showSearch
                style={{ width: "100%" }}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                treeDefaultExpandAll
                treeData={treeHomeData}
              />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item label="Current CTC (Per Annum)" name="currentCTC">
              <InputNumber style={{ width: "100%" }} min={1} max={100} />
            </Form.Item>

            <Form.Item label="Expected CTC (Per Annum)" name="expectedCTC">
              <InputNumber style={{ width: "100%" }} min={1} max={10} />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Notice Period (In Days)"
              name="noticePeriod"
              rules={[
                { required: true, message: "Please enter your notice period" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={1} max={30} />
            </Form.Item>

            <Form.Item label="Reference" name="reference">
              <Cascader options={referenceData} />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Reference of friend (if any)"
              name="referenceOfFriend"
            >
              <Input placeholder="Enter your friend name here" />
            </Form.Item>

            <Form.Item
              label="Reference of others (if any)"
              name="referenceOfOthers"
            >
              <Input placeholder="Enter reference here if you selected others option" />
            </Form.Item>
          </div>
          <div className="Adjust">
            <Form.Item label="Photo Upload" name="photo">
              <Upload
                showUploadList={false}
                beforeUpload={() => false} // Prevent automatic upload
                onChange={handleUploadChange}
              >
                <Button icon={<UploadOutlined />}>
                  Click to Upload (PNG/JPG Only)
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Resume Upload" name="resume">
              <Upload onChange={handleResumeChange}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </div>

          {/* <div className="Adjust"> */}
          <div className="LastField">
            <Form.Item label="Remarks (If any)" name="remarks">
              <Input placeholder="Enter your Remarks" />
            </Form.Item>
          </div>

          {/* </div> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ApplicationForm;

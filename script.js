async function getWeather() {
    const apiKey = '434261872b2f4046a3605416240511'; // Ganti dengan API Key Anda
    const city = document.getElementById('city').value;
  
    if (!city) {
      alert("Masukan Nama Kota/Negara");
      return;
    }
  
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        alert(data.error.message);
      } else {
        document.getElementById('location').textContent = `${data.location.name}, ${data.location.region}`;
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
        document.getElementById('condition').textContent = data.current.condition.text;
  
        const iconElement = document.getElementById('icon');
        iconElement.src = `https:${data.current.condition.icon}`;
        iconElement.style.display = 'inline-block';
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data.");
    }
  }
  
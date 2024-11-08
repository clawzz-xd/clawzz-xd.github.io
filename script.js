async function getWeather() {
  const apiKey = '434261872b2f4046a3605416240511'; // Ganti dengan API Key Anda
  const city = document.getElementById('city').value;
  const unit = document.querySelector('input[name="unit"]:checked').value; // Mendapatkan unit yang dipilih

  if (!city) {
    alert("Masukan Nama Kota");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert(data.error.message);
    } else {
      const tempC = data.current.temp_c;
      const tempF = data.current.temp_f;

      // Menampilkan lokasi
      document.getElementById('location').textContent = `${data.location.name}, ${data.location.region}`;

      // Menampilkan suhu berdasarkan unit yang dipilih
      if (unit === 'C') {
        document.getElementById('temperature').textContent = `${tempC}°C`;
      } else {
        document.getElementById('temperature').textContent = `${tempF}°F`;
      }

      // Menampilkan kondisi cuaca
      document.getElementById('condition').textContent = data.current.condition.text;

      // Menampilkan ikon cuaca
      const iconElement = document.getElementById('icon');
      iconElement.src = `https:${data.current.condition.icon}`;
      iconElement.style.display = 'inline-block';
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data.");
  }
}

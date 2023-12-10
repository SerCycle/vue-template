<template>
    <div>
        <div v-if="loading">Loading...</div>
            <div v-else>
                <table v-if="data && data.length > 0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>
                            <img :src="item.avatar" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%;">
                            </td>
                            <td>{{ item.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            <div v-else>No data available</div>
        </div>
    </div>
</template>

<script scoped>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      data: null,
    };
  },
  mounted() {
    // Fetch data when the component is mounted
    axios.get('https://6575b385b2fbb8f6509d65f2.mockapi.io/testapi/test') // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      .then(response => {
        // Display response data in the console
        console.log('Response Data:', response.data);

        // Set the data property to display in the template
        this.data = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
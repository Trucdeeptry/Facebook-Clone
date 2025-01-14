<template>
    <card title="Find Your Account">
        <template #body>
            <div>
                <p>Please enter your email address or mobile number to search for your account.</p>
                <input type="email">
            </div>
        </template>

        <template #footer>

        </template>
    </card>
    
</template>

<script setup>
    import card from '../components/card.vue';
</script>
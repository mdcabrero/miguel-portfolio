<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="footer-brand">
                <img src="../assets/graphics/miguel-logo.svg" alt="Miguel Logo" class="footer-logo">
                <h3 class="portfolio-author">Miguel Dominguez</h3>
            </div>
                
            <div class="social-links">
                    <a href="#" class="social-link" aria-label="Portfolio">
                        <span class="social-icon portfolio-icon"></span>
                    </a>

                    <a href="#" class="social-link" aria-label="LinkedIn">
                        <span class="social-icon linkedin-icon"></span>
                    </a>
          
                    <a href="#" class="social-link" aria-label="GitHub">
                        <span class="social-icon github-icon"></span>
                    </a>
    
            </div>

        </div>

        <div class="footer-bottom">
            <p class="footer-tagline">Made with care and custom code</p>
            <p class="copyright">©CO 2025</p>
        </div>
    </footer>

</template>

<style scoped>


.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.footer-logo {
    width: 3rem;
    height: auto;
    object-fit: contain;
}

.portfolio-author {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -1px;
}

.social-links {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}


.social-icon {
    display: block;
    width: 3rem;
    height: 3rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.portfolio-icon {
    background-image: url('../assets/graphics/miguel-logo.svg');
}

.linkedin-icon {
    background-image: url('../assets/graphics/miguel-logo.svg');
}

.github-icon {
    background-image: url('../assets/graphics/miguel-logo.svg');
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
}

.footer-tagline {
    font-size: 1.25rem;
    margin: 0;
    color: #fff;
    font-weight: 300;
}

.copyright {
    font-size: 1.125rem;
    margin: 0;
    color: #fff;
    font-weight: 400;
}


</style>
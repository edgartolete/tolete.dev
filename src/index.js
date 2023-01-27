        document.addEventListener('alpine:init', () => {
            Alpine.data('Component', () => ({
                home: true,
                services: false,
                pricing: false,
                about: false,
                menuToggle: false,
                dateToday: new Date().getFullYear(),
                setHome() {
                    this.home = true;
                    this.services = false;
                    this.pricing = false;
                    this.about = false;
                },
                setServices() {
                    this.home = false;
                    this.services = true;
                    this.pricing = false;
                    this.about = false;
                    this.contact = false;
                },
                setPricing() {
                    this.home = false;
                    this.services = false;
                    this.pricing = true;
                    this.about = false;
                    this.contact = false;
                },
                setAbout() {
                    this.home = false;
                    this.services = false;
                    this.pricing = false;
                    this.about = true;
                    this.contact = false;
                }
            }))
        }
        )


import '../styles/PreNavbar.css';

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM6.15 6 8.55 11H15.55Q15.55 11 15.55 11Q15.55 11 15.55 11L18.3 6Q18.3 6 18.3 6Q18.3 6 18.3 6ZM5.2 4H19.95Q20.625 4 20.875 4.5Q21.125 5 20.85 5.55L17.3 11.95Q17.025 12.45 16.575 12.725Q16.125 13 15.55 13H8.1L7 15Q7 15 7 15Q7 15 7 15H19V17H7Q5.875 17 5.3 16.012Q4.725 15.025 5.25 14.05L6.6 11.6L3 4H1V2H4.25ZM8.55 11H15.55Q15.55 11 15.55 11Q15.55 11 15.55 11Z"/></svg>

const PreNavbar = () => {
    return (
        <div className="PreNav">
            <div>
                <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
            </div>
            <div>
                <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                <a href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
            </div>
        </div>
    );
}

export default PreNavbar;
import styled from '@emotion/styled';

export const Nav = styled.nav`
    background-color:#004b84;
    display:flex;
    justify-content:center;
    align-items:center;
    a{
        margin:.5em 1em;
        background-color:#b2ab8a;
        box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 3px 0px;
        border: 1px solid #b2ab8a;
        padding: .2em 2em;
        text-transform: uppercase;
        text-align:center;
        @media (max-width: 768px) {        
            font-size: 1em;  
            padding: .2em 1em;
            margin:.5em .5em;
        } 
        &:hover{
            transition: all 0.4s ease-out !important;
            background-color:transparent !important;
            color:#b2ab8a !important;
            border: 1px solid #b2ab8a;
        }
    }
`;

export const HeaderStyle = styled.header`
    background-color: rgba(246, 246, 246, 0);
        text-align:center;
        img{    
            width: 180px;
            @media (max-width: 768px) {        
                width: 140px;
                margin: 0 auto  auto;
                z-index: 9999;
            }               
        } 
`;

export const HeroStyle = styled.section`
    background-image: url("img/ventanal.jpg");
    height: 30vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
    div{
        background-color:rgba(246, 246, 246, .8);
        position:absolute;
        width: 100vw;
        bottom:10%;
        text-align:center;
    }
    h1{
        @media (max-width: 768px) {        
            font-size: 2rem;
            line-height: 2rem;
        }   
    }
`;

export const CategoriesStyle = styled.section`
    width: 80vw;
    margin: 0 auto;
    padding: 3em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {        
        width: 90vw;
        margin: 0 auto;
        display: grid;
        padding: 2em 0 0 0;
        grid-template-columns: repeat(2, 1fr); 
        gap: .5em;
        align-items: center;
    }            
`;

export const Btn = styled.a`
    background-color:#DBDBDB;
    box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 3px 0px;
    padding: .2em 1.5em;
    text-transform: uppercase;
    text-align:center;
    color:#004b84;
    &:hover{
        transition: all 0.4s ease-out;
        background-color:#b2ab8a;
        color:#3f3f3f;
    }
    &:active {
        background-color:#b2ab8a;
        color:#3f3f3f;      
    }
    &.active {
        background-color:#b2ab8a;
        color:#3f3f3f;      
    }
`;

export const NotesStyle = styled.section`
    width: 90vw;
    margin: 0 auto;
    padding: 2em 0;    
    display: grid;
    gap:2em;
    @media (min-width: 768px) {        
        width: 80vw;
        grid-template-columns: repeat(3, 1fr);    
        padding: 0 0 5em 0;
    }         
`;

export const NotePreviewStyle = styled.div`  
    box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    section{
        padding: 1em 2em 0 2em;        
    }
    div{
        padding: 0 2em 0;
        background-color: #e5f5fb;
        display:flex;
        align-items:center;
        justify-content: space-between;
        p{
            color:#004b84;
        }
    }
`;

export const NoteStyle = styled.div`
    width: 90vw;
    margin: 0 auto;
    padding: 1em 0 5em 0;
    text-align:center;
    h2{
        margin: 1em 0 0 0;
    }
    h3{
        margin: 1em 0 0 0;
        color:#b2ab8a;
        font-size: 1.4rem;                                    
    }
    p{
        text-align: justify;
    }
    @media (min-width: 768px) {        
        width: 60vw;
    } 
    @media (max-width: 768px) {        
        h2{
            font-size: 1.4em;
            line-height: 1.4em;
        }
    }  
`;

export const Share = styled.div`
    padding: 1em 0 0 0;
    h3{
        text-align: center;
        padding: 0 0 .5em 0;
    }
    img{
        height: 2em;
        border-radius: 8px;
        padding: 0 1em;
    }
`;

export const LoginStyle = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
    div{
        margin: 0;
        padding:1em;
        
        box-shadow:rgba(0, 0, 0, 0.1) 5px 5px 14px 5px;
        text-align:center;
        img{
            width: 200px;
            padding: 0 0 0 0;
            margin: 0 auto;
        }
    }
    form{
        label{
            opacity:0;
        }
        input{
            background-color:rgba(246, 246, 246, 1);
            width: 80%;
            padding:1em;
            margin: .5em;
            font-family: 'Cabin', sans-serif;
            font-size: 18px;
            color:#3f3f3f;
            border:1px solid #ffffff;
        }
    }
`;

export const Form = styled.section`
    margin: 3em auto;
    width: 90vw;
    padding:2em;        
    box-shadow:rgba(0, 0, 0, 0.1) 5px 5px 14px 5px;
    text-align:center;
    div{
        display: grid;        
        @media (min-width: 768px) {        
            grid-template-columns: repeat(2,1fr);
        }  
    }
    form{
        label{
            display:none;
        }
        input{
            background-color:rgba(246, 246, 246, 1);
            width: 100%;
            padding: 1em;
            margin: .5em 0;
            font-family: 'Cabin', sans-serif;
            font-size: 16px;
            color:#3f3f3f;
            border:1px solid #ffffff;
        }
        textarea{
            background-color:rgba(246, 246, 246, 1);
            width: 100%;
            padding: 1em;
            margin: .5em 0;
            font-family: 'Cabin', sans-serif;
            font-size: 16px;
            color:#3f3f3f;
            border:1px solid #ffffff;
        }
        select{
            display: block;
            width: 100%;
            padding: 1em;
            border:1px solid #ffffff;
            border-radius:10px;  
            color:#3f3f3f;
            -webkit-appearance: none;
        }
    }        
    @media (min-width: 768px) {        
        width: 70vw;
    }  
`;

export const FormInput = styled.input`
    margin: 2em 0 0 0 !important;
    width: 90%;
    background-color:#004b84 !important;
    box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 3px 0px !important;
    padding: 1em 2em !important;
    text-transform: uppercase !important;
    text-align:center !important;
    color:#ffffff !important;
    &:hover{
        transition: all 0.4s ease-out !important;
        background-color:transparent !important;
        color:#004b84 !important;
        border: 1px solid #004b84;
    }
`;

export const Error = styled.p`
    background-color: #DE4D4D;
    padding: .5rem;
    font-weight: 700;
    font-size: .8rem;
    color: #FFF;
    text-align: center;
    margin: .5rem 0;
`;

export const FooterStyle = styled.footer`
    background-color: #004b84;
    text-align:center;
    padding: 1em 0;
    a{
        color: #ffffff;
    }
`;
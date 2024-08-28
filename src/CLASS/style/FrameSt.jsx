import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const Frame = styled.div`
    padding: 24px;
    background-color: #FFF;
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const MainFrame = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h3`
    font-size: 18px;
    color: #333;
    margin-bottom: 16px;
`;


export const Button = styled.button`
    background-color: #007AFF;
    color: white;
    padding: 12px 24px;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 16px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #005BBB;
    }
`;

export const LinkButton = styled(Link)`
    margin-top: 16px;
    color: #007AFF;
    text-decoration: none;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;

export const Table = styled.table`
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    margin: 24px 0;
    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    background-color: #F9F9F9;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
`;

export const Td = styled.td`
    padding: 12px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #E5E5E5;
    text-align: center;
`;

export const StyledLink = styled(Link)`
    color: #007AFF;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };